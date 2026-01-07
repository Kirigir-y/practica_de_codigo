export default function Home() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <h1>Home</h1>
      {token ? (
        <p className="text-green-600">Usuario autenticado</p>
      ) : (
        <p className="text-red-600">No autenticado</p>
      )}
    </div>
  );
}
