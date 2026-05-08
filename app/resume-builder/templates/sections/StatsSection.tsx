import { Sparkles, Timer, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Sparkles,
    value: "98%",
    title: "ATS Optimization Success",
    desc: "Templates are structured to pass Applicant Tracking Systems used by modern employers.",
    color: "text-purple-500",
  },
  {
    icon: Timer,
    value: "6 min",
    title: "Average Resume Creation Time",
    desc: "Build a complete professional resume in just a few minutes using AI assistance.",
    color: "text-blue-500",
  },
  {
    icon: TrendingUp,
    value: "3x",
    title: "Higher Interview Chances",
    desc: "Optimized formatting and keyword structure significantly improves recruiter visibility.",
    color: "text-pink-500",
  },
]

export default function StatsSection() {
  return (
    <section className="pt-20 px-6">

      <div className="mx-auto max-w-6xl grid sm:grid-cols-3 gap-6">

        {stats.map((item, i) => {
          const Icon = item.icon

          return (
            <div
              key={i}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-primary/30 via-primary/10 to-transparent"
            >

              {/* CARD */}
              <div className="h-full w-full rounded-2xl bg-background/70 backdrop-blur-md p-6 space-y-2 transition group-hover:-translate-y-1 group-hover:shadow-2xl">

                {/* ICON */}
                <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* VALUE */}
                <p className="text-3xl text-gradient font-bold  ">
                  {item.value}
                </p>

                {/* TITLE */}
                <p className="  font-semibold ">
                  {item.title}
                </p>

                {/* DESCRIPTION */}
                <p className="    leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>
          )
        })}

      </div>

    </section>
  )
}