import TeamMember from './team-member';

type Props = {};

const AboutUs: React.FC<Props> = ({}) => {
  return (
    <section className='flex flex-col bg-white py-20 text-3xl md:text-4xl'>
      <div className='container mx-auto px-11'>
        <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
          <strong>We will help you ship better apps, faster.</strong> Our team
          of experts engineers have created the best user experiences in some of
          the most popular apps worldwide.
        </p>
      </div>
      <div className='container mx-auto px-11 text-center mt-28'>
        <h2>Our team</h2>
        <div className='mt-2 '>The &ldquo;spec-ops&rdquo;</div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
          <TeamMember
            id='marc'
            name='Marco Polo'
            socialId='@marcopolo'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='akinn'
            name='Akkinn'
            socialId='@akinn'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='christoph'
            name='Christopheles'
            socialId='@christopog'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='eric'
            name='Marco Polo'
            socialId='@eric'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='matei'
            name='Marco Polo'
            socialId='@matei'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='janic'
            name='Marco Polo'
            socialId='@janic'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='mo'
            name='Marco Polo'
            socialId='@mo'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='szymon'
            name='Marco Polo'
            socialId='@szymon'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='thomas'
            name='Marco Polo'
            socialId='@thomas'
            link='https://github.com/galifornia'
          />
          <TeamMember
            id='viktoria'
            name='Marco Polo'
            socialId='@viktoria'
            link='https://github.com/galifornia'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
