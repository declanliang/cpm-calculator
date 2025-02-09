import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CPMInfo() {
  return (
    <Card className="w-full max-w-2xl mt-8">
      <CardHeader>
        <CardTitle>Understanding CPM (Cost Per Mille)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <section>
          <h3 className="text-lg font-semibold">What is CPM?</h3>
          <p>
            CPM stands for Cost Per Mille, where "mille" means thousand in Latin. It's a metric used in advertising to
            measure the cost of 1,000 advertisement impressions on a webpage.
          </p>
        </section>
        <section>
          <h3 className="text-lg font-semibold">How is CPM Calculated?</h3>
          <p>The formula to calculate CPM is:</p>
          <p className="font-mono bg-gray-100 p-2 rounded">CPM = (Total Cost / Number of Impressions) * 1000</p>
          <p>For example, if you spent $500 on an ad campaign that received 100,000 impressions, your CPM would be:</p>
          <p className="font-mono bg-gray-100 p-2 rounded">($500 / 100,000) * 1000 = $5 CPM</p>
        </section>
        <section>
          <h3 className="text-lg font-semibold">Why is CPM Important?</h3>
          <p>CPM is crucial for advertisers and marketers because:</p>
          <ul className="list-disc list-inside">
            <li>It helps compare the cost efficiency of different advertising campaigns or platforms</li>
            <li>It's useful for budgeting and forecasting advertising costs</li>
            <li>It can indicate the value of an audience to advertisers</li>
          </ul>
        </section>
        <section>
          <h3 className="text-lg font-semibold">Limitations of CPM</h3>
          <p>
            While CPM is a useful metric, it's important to remember that it doesn't measure the effectiveness of an ad
            in terms of engagement, conversions, or return on investment (ROI). It should be used alongside other
            metrics for a comprehensive understanding of ad performance.
          </p>
        </section>
      </CardContent>
    </Card>
  )
}

