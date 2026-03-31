/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import InteractionEvolution from './components/InteractionEvolution';
import PainPoints from './components/PainPoints';
import Capabilities from './components/Capabilities';
import TechArchitecture from './components/TechArchitecture';
import FeatureOverview from './components/FeatureOverview';
import UseCases from './components/UseCases';
import Partners from './components/Partners';
import LeadGen from './components/LeadGen';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-1">
      <Navbar />
      <Hero />
      <Stats />
      <InteractionEvolution />
      <PainPoints />
      <Capabilities />
      <TechArchitecture />
      <FeatureOverview />
      <UseCases />
      <Partners />
      <LeadGen />
      <Footer />
    </div>
  );
}
