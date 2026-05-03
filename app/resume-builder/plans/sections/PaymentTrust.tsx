export function PaymentTrust() {
  return (
    <section className="py-10 px-6 text-center space-y-4">

      <p className="text-sm text-muted-foreground">
        Secure payment powered by trusted providers
      </p>

      <div className="flex justify-center gap-6 opacity-70">
        {/* add logos */}
        <span>Visa</span>
        <span>Mastercard</span>
        <span>PayPal</span>
      </div>

    </section>
  )
}