export default function Architecture() {
  return (
    <section className="text-gray-300">
      <h2 className="text-4xl font-bold mb-10">
        System Architecture
      </h2>

      <div className="p-6 border border-gray-800 rounded-xl bg-white/5">
        <pre className="text-gray-300 text-sm">
Frontend (Next.js + TypeScript)
        ↓
API Layer (Express.js)
        ↓
Auth Middleware (JWT Validation)
        ↓
Controller Layer
        ↓
Service Layer (Business Logic + AI Integration)
        ↓
Database (PostgreSQL + Prisma)
        </pre>
      </div>
    </section>
  );
}