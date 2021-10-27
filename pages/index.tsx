import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { faCloud, faServer, faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { ServiceCard } from '../components/serviceCard';
import { PostCard } from '../components/postCard';
import { CallToAction } from '../components/callToAction';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { getLatestPost } from './api/posts';
import { PostType } from '../types/post';
import { getLatestProject } from './api/projects';
import { ProjectCard } from '../components/projectCard';
import { ProjectType } from '../types/project';
import { StatCard } from '../components/statCard';
import ContactForm from '../components/contactForm';
import Certification from '../components/certification';

type HomeProps = {
  post: PostType;
  project: ProjectType;
};

export default function Home({
  post,
  project,
}: HomeProps) {
  return (
    <Layout>
      <NextSeo
        title="Mozstro - Home"
      />
      <Header>
        <h1 className="text-4xl lg:text-7xl text-center text-ebonyclay">
          <span>At</span>
          <a
            className="font-bold italic text-sundance hover:text-ebonyclay cursor-pointer"
            href="/"
            rel="noopener noreferrer"
          >
            &nbsp;Mozstro&nbsp;
          </a>
          <span>we do cloud consulting.</span>
        </h1>
        <h2 className="text-center text-ebonyclay text-xl lg:text-2xl">
          <span className="text-sundance">Securely supercharged </span>
          cloud native solutions to complex business problems.
        </h2>
      </Header>
      <section>
        <div className="flex justify-center">
          <h3
            className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-2 mb-4
                       text-ebonyclay transform -rotate-2 shadow-lg"
          >
            What
            we offer at
            <a
              className="font-bold italic text-palesky hover:text-ebonyclay"
              href="/"
              rel="noopener noreferrer"
            >
              {' '}
              Mozstro.
            </a>
          </h3>
        </div>
        <div className="flex bg-rollingstone py-6 rounded inline-flex flex-wrap justify-center my-9">
          <ServiceCard
            title="Security first cloud native solutions."
            questionOne="Want a faster time to market?"
            questionTwo="Need to be more reactive to customer demands?"
            paragraph="We provide high quality cloud native solutions
            for complex business problems."
          />
          <ServiceCard
            title="Embedded engineering consulting."
            questionOne="Already have internal talent?"
            questionTwo="Does your talent just need some guidance?"
            paragraph="We can embed our high quality consultants to get that project over the line."
          />
        </div>
        <div className="flex justify-center">
          <h3
            className="text-ebonyclay text-4xl bg-geebung inline-block p-6 mt-6 lg:mt-2 mb-4
                     text-ebonyclay transform -rotate-2 shadow-lg"
          >
            The state of cloud security.
          </h3>
        </div>
        <div className="grid bg-hippiegreen rounded p-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-9 gap-12">
          <StatCard
            stat="66%"
            text="of IT professionals say security is their greatest concern when asked
                    about adopting cloud."
            icon={faCloud}
            credit="https://www.forbes.com/sites/louiscolumbus/2018/01/07/83-of-enterprise-
                    workloads-will-be-in-the-cloud-by-2020/#1435d8166261"
          />
          <StatCard
            stat="66%"
            text="of attacks are caused by accidental exposure
                    through misconfigurations."
            icon={faServer}
            credit="https://secure2.sophos.com/en-us/content/state-of-cloud-security.aspx"
          />
          <StatCard
            stat="70%"
            text="of organizations hosting data or workloads in the public cloud
                          experienced a security incident in the last year."
            icon={faFireAlt}
            credit="https://secure2.sophos.com/en-us/content/state-of-cloud-security.aspx"
          />
        </div>
        <div className="bg-equator rounded p-6">
          <h6 className="mb-2 text-3xl text-ebonyclay">
            Want to take advantage of cloud? Your business needs
            <span className="text-hippiegreen"> supercharged </span>
            {' '}
            cloud
            <span className="text-hippiegreen"> security.</span>
          </h6>
          <CallToAction link="mailto:sales@mozstro.com" text="Find out more" />
        </div>
      </section>
      <section className="mt-12">
        <h3
          className="text-ebonyclay order-1 text-2xl text-4xl bg-geebung inline-block
                p-6 text-ebonyclay shadowd transform -rotate-2"
        >
          Our latest work.
        </h3>
        <div className="grid grid-cols-1 mt-6">
          <ProjectCard key={project.slug} project={project} />
        </div>
      </section>
      <section className="mt-16 mb-8">
        <div className="flex flex-wrap px-5 mx-auto">
          <div className="w-full xl:w-1/2">
            <h3
              className="text-ebonyclay order-1 text-4xl bg-geebung inline-block mb-6 lg:my-1
                p-6 text-ebonyclay transform shadowd -rotate-2"
            >
              What we are talking about right now.
            </h3>
            <PostCard post={post} />
          </div>
          <div className="flex flex-col justify-evenly w-full xl:w-1/2">
            <div className="flex justify-end ">
              <h3
                className="lg:text-right text-ebonyclay order-3 lg:order-2 text-4xl bg-geebung
                   inline-block my-6 lg:my-1 p-6 shadowd text-ebonyclay transform rotate-2"
              >
                Who have we worked with?
              </h3>
            </div>
            <div className="flex flex-col md:pl-12 mt-12 justify-between">
              <h3
                className="sm:text-3xl text-2xl fontedium bg-equator
                             mb-2 text-ebonyclay inline-block p-2"
              >
                Experience working with:
              </h3>
              <ul className="pl-8 flex flex-wrap list-disc">
                <li className="font-serif text-rollingstone font-bold mb-1 w-full md:w-1/2">
                  Industry leading retailers.
                </li>
                <li className="font-serif text-rollingstone font-bold mb-1 w-full md:w-1/2">
                  Uk's Largest public sector organization.
                </li>
                <li className="font-serif text-rollingstone font-bold mb-1 w-full md:w-1/2">
                  Titan supermarkets.
                </li>
                <li className="font-serif text-rollingstone font-bold mb-1 w-full md:w-1/2">
                  Powerhouse sports teams.
                </li>
              </ul>
              <p className="text-center mt-4 text-lg">
                Further details on some of these projects can be found
                <a
                  className="text-sundance hover:text-ebonyclay cursor-pointer"
                  href="/work"
                >
                 &nbsp;here
                </a>
                !
              </p>
              <h3 className="text-center text-ebonyclay mb-3 mt-16 lg:mt-24 text-5xl">
                Get in touch!
              </h3>
              <ContactForm />
            </div>
            <Certification />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const post = getLatestPost(['date', 'description', 'slug', 'title', 'topic']);
  const project = getLatestProject(['date', 'description', 'slug', 'title', 'sector']);

  return {
    props: {
      post,
      project,
    },
  };
};
