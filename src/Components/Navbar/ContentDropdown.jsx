const ContentDropdown = ({ content }) => {
  return (
    <div className="bg-white flex items-center px-5 py-3 gap-5 text-sm font-medium overflow-auto max-h-full max-w-full">
      <span className="cursor-pointer text-[#1C1C1C]">{content}</span>
    </div>
  );
};

export default ContentDropdown;
