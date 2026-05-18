import { NaraNav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Abstract } from "./sections/Abstract";
import {
  ProblemIntro,
  ProblemTimeline,
  ProblemStats,
  ProblemMechanism,
  ProblemAttachment,
  ProblemDeathOf,
} from "./sections/Problem";
import {
  UsersCanaries,
  UsersNaraIntro,
  UsersDisruptor,
  UsersHowWeGotHere,
  UsersOneGoal,
} from "./sections/Users";
import {
  ResearchExperts,
  ResearchIntervention,
  ResearchTheories,
  ResearchSystemMap,
} from "./sections/Research";
import {
  DesignCover,
  DesignCommitments,
  DesignGlyphs,
} from "./sections/Design";
import {
  SystemTimescales,
  SystemEcosystem,
  SystemPhysical,
  SystemMediation,
} from "./sections/System";
import {
  PrototypeGallery,
  PrototypeHardware,
  PrototypeTimeline,
  PrototypeDemo,
} from "./sections/Prototype";
import {
  PolicyRings,
  PolicyMyFirstAI,
  PolicyNewNature,
  PolicyIsIsnt,
  PolicyFinal,
  PolicyReferences,
} from "./sections/Policy";

export default function NaraPage() {
  return (
    <>
      <NaraNav />
      <div style={{ paddingTop: 56 }}>
        <Hero />
        <Abstract />

        <ProblemIntro />
        <ProblemTimeline />
        <ProblemStats />
        <ProblemMechanism />
        <ProblemAttachment />
        <ProblemDeathOf />

        <UsersCanaries />
        <UsersNaraIntro />
        <UsersDisruptor />
        <UsersHowWeGotHere />
        <UsersOneGoal />

        <ResearchExperts />
        <ResearchIntervention />
        <ResearchTheories />
        <ResearchSystemMap />

        <DesignCover />
        <DesignCommitments />
        <DesignGlyphs />

        <SystemTimescales />
        <SystemEcosystem />
        <SystemPhysical />
        <SystemMediation />

        <PrototypeGallery />
        <PrototypeHardware />
        <PrototypeTimeline />
        <PrototypeDemo />

        <PolicyRings />
        <PolicyMyFirstAI />
        <PolicyNewNature />
        <PolicyIsIsnt />
        <PolicyFinal />
        <PolicyReferences />
      </div>
    </>
  );
}
