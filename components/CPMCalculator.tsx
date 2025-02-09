"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function CPMCalculator() {
  const [cost, setCost] = useState("")
  const [impressions, setImpressions] = useState("")
  const [cpm, setCPM] = useState<number | null>(null)

  const calculateCPM = () => {
    const costValue = Number.parseFloat(cost)
    const impressionsValue = Number.parseFloat(impressions)

    if (costValue && impressionsValue) {
      const result = (costValue / impressionsValue) * 1000
      setCPM(Number.parseFloat(result.toFixed(2)))
    } else {
      setCPM(null)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>CPM Calculator</CardTitle>
        <CardDescription>Calculate your Cost Per Mille (CPM)</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            calculateCPM()
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="cost">Total Cost</Label>
            <Input
              id="cost"
              type="number"
              placeholder="Enter total cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="impressions">Number of Impressions</Label>
            <Input
              id="impressions"
              type="number"
              placeholder="Enter number of impressions"
              value={impressions}
              onChange={(e) => setImpressions(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Calculate CPM
          </Button>
        </form>
        {cpm !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">Your CPM is: ${cpm}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

