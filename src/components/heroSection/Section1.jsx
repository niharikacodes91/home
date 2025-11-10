const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between px-20 py-16">
      
      
      <div className="w-full md:w-1/2 flex flex-col items-start mb-10 md:mb-0">
        <h1 className="text-4xl font-bold text-pink-300 mb-4">
          Your Roadmap to Product Management
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Dunkin' Donuts is an American multinational coffee and doughnut company, as well as a quick service restaurant.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
          Learn More
        </button>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-end -mr-40">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7D3E8qk0kGdQFu0YyZLxkrWPlp64BNtUyrg&s"
    alt="Illustration"
    className="rounded-xl w-4/5 md:w-[800px] h-auto"
  />
</div>


    </div>
  );
};

export default Section1;

