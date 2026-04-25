import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { Role, ROLES } from "@/dashboard/roles";
import { canAccessRoute } from "@/dashboard/route-protection";
 
/**
 * Extract role safely from Supabase user metadata
 */
function extractRole(user: any): Role {
  const role = user?.user_metadata?.role;

  if (!role) return ROLES.ANONYMOUS;

  // safety check (prevents invalid role injection)
  const validRoles = Object.values(ROLES);

  return validRoles.includes(role) ? role : ROLES.ANONYMOUS;
}

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });
  const pathname = request.nextUrl.pathname;

  // only protect app routes
  if (!pathname.startsWith("/printinghub")) {
    return NextResponse.next();
  }
   
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookies) {
          cookies.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({ request });

          cookies.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

 
  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth";
    url.searchParams.set("q", "signin");
    url.searchParams.set("msg", "Please sign in to access the dashboard");
    return NextResponse.redirect(url);
  }

  // extract role safely
  const role = extractRole(user);

  // RBAC check
  const hasAccess = canAccessRoute(role, pathname);

  if (!hasAccess) {
    const url = request.nextUrl.clone();
    url.pathname = "/printinghub"; // back to dashboard landing
    // url.searchParams.set("q", "signin");
    url.searchParams.set("msg", "You do not have enough permission to grant access");
    return NextResponse.redirect(url);
  }

  return response;
}
