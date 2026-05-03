export function ReviewsSection() {
  return (
    <section className="py-16 px-6">

      <div className="mx-auto max-w-4xl space-y-8">

        <h2 className="text-center">
          Trusted by thousands of job seekers
        </h2>

        <div className="space-y-6">

          {[
            "Templates look professional without being flashy. I got interviews within days.",
            "ATS checker helped me fix critical mistakes I didn’t notice.",
            "Downloaded multiple formats easily. Worth every cent.",
          ].map((text, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-background border"
            >
              <p className="text-sm">“{text}”</p>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}