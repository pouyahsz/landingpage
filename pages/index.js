import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PurchasingProcess() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/product");
  })
  return (
    <></>
  )

}
