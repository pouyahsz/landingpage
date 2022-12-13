import Authentication from "./Authentication";
import CompletingInformations from "./CompletingInformatians";
import Verifying from "./Verifying";
import PurchasingSteps from "./PurchasingSteps";
import styles from './style.module.scss';
import OrderInfo from "./OrderInfo";
import { useState } from "react";

export default function PurchasingProcess() {
  const [step, setStep] = useState("authentication");
  if (step === "authentication") {
    return (
      <div className={styles["purchasing-processes"]}>
        <PurchasingSteps step={step} />
        <Authentication onChangeStep={setStep} />
      </div>
    )
  }
  if (step === "verifying") {
    return (
      <div className={styles["purchasing-processes"]}>
        <PurchasingSteps step={step} />
        <Verifying onChangeStep={setStep} />
      </div>
    )
  }
  if (step === "completing informations") {
    return (
      <div className={styles["purchasing-processes"]}>
        <PurchasingSteps step={step} />
        <CompletingInformations onChangeStep={setStep} />
      </div>
    )
  }
  if (step === "order info") {
    return (
      <div className={styles["purchasing-processes"]}>
        <PurchasingSteps step={step} />
        <OrderInfo onChangeStep={setStep} />
      </div>
    )
  }
}
