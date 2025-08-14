import TeamMembers from "@/components/home1/Team";
import Customer from "@/components/home3/Customer";
import SectionTop from "@/components/shared/SectionTop";

const Team = () => {
  return (
    <>
      <SectionTop title={"Team"} />
      <TeamMembers />
      <Customer />
    </>
  );
};

export default Team;
