import { useTranslations } from "next-intl";
import { FC } from "react";

import { Button } from "@/shared";

const Home: FC = () => {
  const t = useTranslations("common");

  return <Button text={t("test")} />;
};

export default Home;
