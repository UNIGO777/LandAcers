import  Layout  from "./Pages/Layout"
import  MetricCards  from "./Pages/Cards.js"
import RecentProperties  from "./Pages/RecentProperties.js"

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome to your property management dashboard. Here's an overview of your recent activity.
          </p>
        </div>
        <MetricCards />
        <RecentProperties />
      </div>
    </Layout>
  )
}

export default Dashboard
