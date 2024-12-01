const Skills = () => {
  return (
    // <section className="mt-6">
    //   <h3 className="text-2xl font-semibold">Skills</h3>
    //   <ul className="list-disc list-inside mt-2">
    //     <li>
    //       Frontend: HTML, CSS, Sass, Tailwind CSS, JavaScript, React, Next.js,
    //       TypeScript
    //     </li>
    //     <li>Backend: Node.js (Express), Java (Spring Boot), Python</li>
    //     <li>Databases: MySQL, MongoDB, Firebase</li>
    //     <li>
    //       Frameworks & Tools: React Native, Git, FFmpeg, Algolia, OpenAI,
    //       Tuney's AI, Spotify Integration
    //     </li>
    //     <li>
    //       Other Skills: Scalable architecture design, AI Integration, API
    //       integration, Agile methodology
    //     </li>
    //   </ul>
    // </section>
    <div class="bg-gray-100">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8">
          Bento Grid Layout with Images
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Nature"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h3 class="text-2xl font-bold text-white">Explore Nature</h3>
                <p class="text-white">
                  Discover the beauty of the natural world
                </p>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Food"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h4 class="text-xl font-bold text-white">Culinary Delights</h4>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Technology"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h4 class="text-xl font-bold text-white">Tech Innovations</h4>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Travel"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h4 class="text-xl font-bold text-white">Travel Adventures</h4>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Art"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h4 class="text-xl font-bold text-white">
                  Artistic Expressions
                </h4>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Sport"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h4 class="text-xl font-bold text-white">Swimming</h4>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Sport"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h4 class="text-xl font-bold text-white">Chess</h4>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Sport"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h4 class="text-xl font-bold text-white">Football</h4>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Sport"
              class="w-full h-48 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h4 class="text-xl font-bold text-white">Cricket</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
