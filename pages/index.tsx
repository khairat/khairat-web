import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Khairat</title>
    </Head>

    <header className="m-12 flex flex-col items-center justify-center">
      <h1 className="lowercase font-medium text-4xl">Khairat</h1>
      <img className="my-4 h-32 w-32" src="/img/happy.svg" />
      <p className="text-xl">
        Khairat is the world&apos;s first truly transparent and open charity
        framework. It allows charities to be accountable for every cent of their
        spending and donors to see exactly where their donations go
      </p>
    </header>

    <main className="m-12">
      <section className="text-xl mt-20 pt-12 border-t border-gray-300">
        <h2 className="text-6xl font-medium">Here&apos;s how it works</h2>
        <figure className="flex flex-col mt-8">
          <img className="h-40" src="/img/how-it-works-1.svg" />
          <figcaption className="mt-4">
            Your charity creates a <em>need</em> &mdash; eg, $100 required to
            feed homeless people around 10th Street
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-40" src="/img/how-it-works-2.svg" />
          <figcaption className="mt-4">
            When someone donates through the app, they get an instant
            notification that their money was put to use
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-40" src="/img/how-it-works-3.svg" />
          <figcaption className="mt-4">
            The donation is deducted from the <em>need</em> until it&apos;s been
            fulfilled. The next <em>need</em> is moved to top of queue
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-40" src="/img/how-it-works-4.svg" />
          <figcaption className="mt-4">
            The <em>needs</em> can be donations or charity&apos;s expenses;
            admin expenses, marketing costs &mdash; everything is acccounted for
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-40" src="/img/how-it-works-5.svg" />
          <figcaption className="mt-4">
            All data is securely stored on the cloud and accessible from
            anywhere to anyone
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-40" src="/img/how-it-works-6.svg" />
          <figcaption className="mt-4">
            Both you and your donors know exactly where every cent went,
            quantifying all the effort
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-40" src="/img/how-it-works-7.svg" />
          <figcaption className="mt-4">
            Everyone is happy, especially the people you helped!
          </figcaption>
        </figure>
      </section>
      <section className="text-xl mt-20 pt-12 border-t border-gray-300">
        <h2 className="text-6xl font-medium">Features</h2>
        <figure className="flex flex-col mt-8">
          <img className="h-20" src="/img/features-1.svg" />
          <figcaption className="mt-4">
            100% open source &mdash; apps, dashboards
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-20" src="/img/features-2.svg" />
          <figcaption className="mt-4">
            Dashboard to manage every aspect of your charity
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-20" src="/img/features-3.svg" />
          <figcaption className="mt-4">
            Manage your needs, both donations and managerial &mdash; payroll,
            expenses, others
          </figcaption>
        </figure>
        <figure className="flex flex-col mt-8">
          <img className="h-20" src="/img/features-4.svg" />
          <figcaption className="mt-4">
            Mobile apps for you and your donors
          </figcaption>
        </figure>
      </section>
      <section className="mt-20 pt-12 border-t border-gray-300">
        <h2 className="text-6xl font-medium">Story</h2>
        <img className="h-40 mx-auto my-8" src="/img/story.svg" />
        <p className="mt-4">
          When I was 16, I missed an opportunity to feed a hungry person out of
          sheer ignorance and stupidity. I was traveling to another country
          where the event happened. They couldn&apos;t ask me because we
          didn&apos;t speak the same language, and they had money in their hand,
          leading me to believe they didn&apos;t need help. After I got my food
          and left the place when I realized they didn&apos;t have enough money.
        </p>
        <p className="mt-4">
          Years after the event, the shame still lingers. However, now it&apos;s
          turned into a tremendous desire to help people in need, especially if
          they&apos;re hungry. Nobody should ever have to go hungry. A few years
          ago, I had an opportunity to feed another person. I nearly missed it
          but was able to salvage at the last moment. The joy I got from helping
          someone was terrific. Which is why I&apos;m building Khairat.
        </p>
        <p className="mt-4">
          Khairat means charity in Urdu. It&apos;s a platform where you can
          donate something and know exactly where it went. It brings
          transparency to every step and gives you real-time notifications when
          your donations are put to use.
        </p>
        <p className="mt-4">
          The model of the framework is still a work in progress. It&apos;s seen
          many iterations and probably more to come. Soon, I&apos;ll open it up
          to the public to help shape what it looks like.
        </p>
      </section>
    </main>

    <footer className="m-12 pt-12 border-t border-gray-300">
      <p className="text-gray-600">Find me on</p>
      <aside className="flex mt-8 justify-center mx-auto">
        <a href="https://twitter.com/alizahid0">
          <img className="h-8 w-8" src="/img/social/twitter.svg" />
        </a>
        <a className="ml-8" href="https://github.com/alizahid">
          <img className="h-8 w-8" src="/img/social/github.svg" />
        </a>
        <a className="ml-8" href="https://dribbble.com/alizahid">
          <img className="h-8 w-8" src="/img/social/dribbble.svg" />
        </a>
      </aside>
    </footer>
  </>
)

export default Home
