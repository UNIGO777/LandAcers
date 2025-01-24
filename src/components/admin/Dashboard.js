import  Layout  from "./Pages/Layout"
import  MetricCards  from "./Pages/Cards.js"
import RecentProperties  from "./Pages/RecentProperties.js"

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-gray-500">Welcome to your property management dashboard</p>
        </div>
        <MetricCards />
        <RecentProperties />
      </div>
    </Layout>
  )
}

export default Dashboard
