import Head from 'next/head';
import Layout from '../components/Layout';
import DataDisplay from '../components/DataDisplay';
import HealthIndicator from '../components/HealthIndicator';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Full-Stack Web Application</title>
        <meta name="description" content="A containerized full-stack web application" />
      </Head>

      <main>
        <div className="container">
          <h1>Welcome to the Full-Stack Web Application</h1>
          <p>This is a containerized application with Next.js frontend and FastAPI backend.</p>

          <HealthIndicator apiUrl={process.env.NEXT_PUBLIC_API_BASE_URL} />

          <DataDisplay />
        </div>
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          color: #666;
        }
      `}</style>
    </Layout>
  );
}