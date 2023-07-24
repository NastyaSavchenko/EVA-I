import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Plans } from "../../components/Plans/Plans";
import { PricingInfo } from "./Pricing.styled";
import { TryBot } from "../../components/TryBot/TryBot";

export const Pricing = () => {
  return (
    <main>
      <section>
        <SectionTitle title={"Pricing & Plans"} />
        <PricingInfo>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
        </PricingInfo>
        <Plans />
      </section>
      <TryBot />
    </main>
  );
};
