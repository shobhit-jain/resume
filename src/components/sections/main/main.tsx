import { CurrentProfession } from "./components/current-profession/current-profession";
import { InternShips } from "./components/internships/internships";
import { Personal } from "./components/personal/personal";
import { ProfileAndInfo } from "./components/profile and info/profile and info";
import { SideProjects } from "./components/side-projects/side-projects";
import { Skills } from "./components/skills/skills";

export const Main = () => {
  return (
    <main className="mt-24 container m-auto lg:px-36 px-5 gap-y-10 flex flex-col">
      <ProfileAndInfo />
      <Skills />
      <InternShips />
      <SideProjects />
      <CurrentProfession />
      <Personal />
    </main>
  );
};
