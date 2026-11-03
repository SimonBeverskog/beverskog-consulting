import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import projectTimber from '@/assets/project-timber.jpg';
import projectConservation from '@/assets/project-conservation.jpg';
import projectReforestation from '@/assets/project-reforestation.jpg';
import projectWetland from '@/assets/project-wetland.jpg';
import projectBiodiversity from '@/assets/project-biodiversity.jpg';
import projectForestProtection from '@/assets/project-forest-protection.jpg';
import projectWoodpecker from '@/assets/project-woodpecker.jpg';
import projectPowerline from '@/assets/project-powerline.jpg';
import projectTjader from '@/assets/project-tjader.jpg';
import projectBranning from '@/assets/project-bränning.jpg';
import projectArtSkydd from '@/assets/project-artskydd-2.jpg';
import projectHogaNaturvarden from '@/assets/project-hoga-naturvarden.jpg';

const projectImages: Record<string, string> = {
  projectTimber,
  projectReforestation,
  projectConservation,
  projectWetland,
  projectBiodiversity,
  projectForestProtection,
  projectWoodpecker,
  projectPowerline,
  projectTjader,
  projectBranning,
  projectArtSkydd,
  projectHogaNaturvarden,
};


const ProjectsSection = () => {
  return (
    <section id='projects' className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <p className='text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body'>
            Mitt arbete
          </p>
          <h2 className='font-heading text-3xl md:text-4xl font-bold text-foreground'>
            Projekt & uppdrag inom naturvärdesinventering, fågelinventering och artskydd
          </h2>
          <p className='text-muted-foreground font-body max-w-2xl mx-auto mt-4 leading-relaxed'>
            Exempel på genomförda uppdrag — från nyckelbiotopsbedömningar och artskyddsutredningar till inventeringar av tretåig hackspett och tjäder — med säkra beslutsunderlag för skogsbruk och exploatering i hela Sverige.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl border border-border/50 transition-all duration-300 hover:-translate-y-1'
            >
              <div className='overflow-hidden h-56'>
                <img
                  src={projectImages[project.image]}
                  alt={project.alt}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  loading='lazy'
                  decoding='async'
                />
              </div>
              <div className='p-6'>
                <h3 className='font-heading text-xl font-semibold text-foreground mb-3'>
                  {project.title}
                </h3>
                <p className='text-muted-foreground text-sm leading-relaxed mb-4 font-body'>
                  {project.description}
                </p>
                <div className='border-t border-border pt-4'>
                  <p className='text-sm font-body'>
                    <span className='font-semibold text-primary'>
                      Resultat:
                    </span>{' '}
                    <span className='text-muted-foreground'>
                      {project.result}
                    </span>
                  </p>
                  <Link
                    to={`/tjanster/${project.serviceSlug}`}
                    className='inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:underline'
                  >
                    Läs mer om {services.find((s) => s.slug === project.serviceSlug)?.title.toLowerCase() ?? 'tjänsten'} <ArrowRight className='w-4 h-4' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
