export default ({ href, title }) => {
  return (
    <div>
      <span className="font-bold text-gray-700">&rarr;</span>
      <a
        className="ml-2 text-lg text-blue-700 hover:underline"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  );
};
