import React, { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import format from "date-fns/format"
import isAfter from "date-fns/isAfter"
import queriesData from "../../Data/QueriesData"
import Layout from "../Layout"

const QueriesManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState(null)
  const [selectedQuery, setSelectedQuery] = useState(null)
  const [loadedQueries, setLoadedQueries] = useState([])

  useEffect(() => {
    if (Array.isArray(queriesData)) {
      setLoadedQueries(queriesData)
    } else {
      console.error("queriesData is not an array:", queriesData)
      setLoadedQueries([])
    }
  }, [])

  const filteredQueries = useMemo(() => {
    return loadedQueries.filter((query) => {
      const matchesSearch =
        query.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.brokerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.subject.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || query.status === statusFilter

      const matchesDate = !dateFilter || isAfter(new Date(query.createdAt), dateFilter)

      return matchesSearch && matchesStatus && matchesDate
    })
  }, [searchTerm, statusFilter, dateFilter, loadedQueries])

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "#EAB308" // yellow-500
      case "in-progress":
        return "#3B82F6" // blue-500
      case "resolved":
        return "#22C55E" // green-500
      case "closed":
        return "#6B7280" // gray-500
      default:
        return "#D1D5DB" // gray-300
    }
  }

  if (loadedQueries.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "2rem" }}>Queries Management</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search by user, broker, or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flexGrow: 1,
            padding: "0.5rem",
            border: "1px solid #D1D5DB",
            borderRadius: "0.375rem",
            outline: "none",
          }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: "0.5rem",
            border: "1px solid #D1D5DB",
            borderRadius: "0.375rem",
            outline: "none",
          }}
        >
          <option value="all">All Statuses</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>
        <input
          type="date"
          value={dateFilter ? format(dateFilter, "yyyy-MM-dd") : ""}
          onChange={(e) => setDateFilter(e.target.value ? new Date(e.target.value) : null)}
          style={{
            padding: "0.5rem",
            border: "1px solid #D1D5DB",
            borderRadius: "0.375rem",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
        {filteredQueries.map((query) => (
          <motion.div
            key={query._id.toString()}
            layoutId={query._id.toString()}
            onClick={() => setSelectedQuery(query)}
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              cursor: "pointer",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            whileHover={{
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{query.subject}</h2>
              <span
                style={{
                  padding: "0.25rem 0.5rem",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "white",
                  backgroundColor: getStatusColor(query.status),
                }}
              >
                {query.status}
              </span>
            </div>
            <p style={{ color: "#4B5563", marginBottom: "1rem" }}>{query.description.substring(0, 100)}...</p>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "#6B7280" }}>
              <span>User: {query.userName}</span>
              <span>Broker: {query.brokerName}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.875rem",
                color: "#6B7280",
                marginTop: "0.5rem",
              }}
            >
              <span>Priority: {query.priority}</span>
              <span>Created: {format(new Date(query.createdAt), "dd MMM yyyy")}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
            onClick={() => setSelectedQuery(null)}
          >
            <motion.div
              layoutId={selectedQuery._id.toString()}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                maxWidth: "42rem",
                width: "100%",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{selectedQuery.subject}</h2>
                <span
                  style={{
                    padding: "0.25rem 0.5rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "white",
                    backgroundColor: getStatusColor(selectedQuery.status),
                  }}
                >
                  {selectedQuery.status}
                </span>
              </div>
              <p style={{ color: "#4B5563", marginBottom: "1rem" }}>{selectedQuery.description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <p style={{ fontWeight: "600" }}>User</p>
                  <p>{selectedQuery.userName}</p>
                </div>
                <div>
                  <p style={{ fontWeight: "600" }}>Broker</p>
                  <p>{selectedQuery.brokerName}</p>
                </div>
                <div>
                  <p style={{ fontWeight: "600" }}>Priority</p>
                  <p style={{ textTransform: "capitalize" }}>{selectedQuery.priority}</p>
                </div>
                <div>
                  <p style={{ fontWeight: "600" }}>Created At</p>
                  <p>{format(new Date(selectedQuery.createdAt), "dd MMM yyyy HH:mm")}</p>
                </div>
              </div>
              {selectedQuery.resolution && (
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontWeight: "600" }}>Resolution</p>
                  <p>{selectedQuery.resolution}</p>
                </div>
              )}
              {selectedQuery.resolvedAt && (
                <div>
                  <p style={{ fontWeight: "600" }}>Resolved At</p>
                  <p>{format(new Date(selectedQuery.resolvedAt), "dd MMM yyyy HH:mm")}</p>
                </div>
              )}
              <button
                style={{
                  marginTop: "1.5rem",
                  backgroundColor: "#3B82F6",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedQuery(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </Layout>
  )
}

export default QueriesManagement;

