export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login,
  }) {
    const isLoggedIn = true; //real world use authentication
    return isLoggedIn ? (
      <div>
        <h1>{children}</h1>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    ) : (
      login
    )
  }