export default function JobCard({ title, location, description }) {
  return (
    <div className="job-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
      <p>{description}</p>
    </div>
  );
}
