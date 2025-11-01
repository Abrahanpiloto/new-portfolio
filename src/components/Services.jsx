import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="min-h-screen bg-[#FCF9F5] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 px-4 py-12">
      <div className="absolute top-4 right-6 font-bold dark:hover:text-amber-200 hover:text-blue-600">
        <Link to="/">Inicio</Link>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
          Algunos de mis trabajos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-12 mb-12">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-center">
                <Card2
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  code={project.code}
                  ad={project.ad}
                />
              </div>
              {/* {index === 1 && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
                  <span className="text-sm text-red-600 font-semibold mt-2 italic">
                    Ecommerce actualmente en construcción
                  </span>
                </div>
              )} */}
            </React.Fragment>
          ))}
        </div>
      </div>
      <ButtonCta />
    </section>
  );
};

export default Services;
