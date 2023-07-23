import React, { useEffect, useState } from "react";
import "./PlMyStats.sass";
import Page from "frontend/components/common/Page/Page";
import WeaponBlock from "frontend/platform/components/WeaponBlock/WeaponBlock";
import { Weapon } from "types/weapons";
import { UserCompleteData } from "types/user";

const PlMyStats = () => {
  const [data, setData] = useState<UserCompleteData>();

  const getData = () => {
    fetch("./data/userData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page pageType="platform" pageClass="platform-my-stats-page">
      <div className="wrapper">
        <WeaponBlock weapon={[Weapon.Bow]} weaponType="main" />
        <WeaponBlock weapon={[Weapon.Daggers]} weaponType="secondary" />
      </div>
    </Page>
  );
};

export default PlMyStats;
