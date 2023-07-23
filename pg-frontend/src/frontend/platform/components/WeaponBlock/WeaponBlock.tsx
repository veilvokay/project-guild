import React, { useState } from "react";
import "./WeaponBlock.sass";
import { WeaponTypes } from "types/weapons";
import { firstLetterUppercase } from "helpers/functions";

interface IWeaponBlockProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  weapon: WeaponTypes;
  weaponType: "main" | "secondary";
  divClass?: string;
}

const EditWeapon = () => {
  // TODO: Edit function
};

const WeaponBlock = (props: IWeaponBlockProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { weapon, weaponType, divClass } = props;

  return (
    <div className={`weapon-block ${divClass ? divClass : ""}`}>
      <h4 className="weapon-block__title title-h4">
        {firstLetterUppercase(weaponType)} Weapon
      </h4>
      <p className="weapon-block__name desc-2">{weapon}</p>
      <img src="#" alt={""} className="weapon-block__img" />
    </div>
  );
};

export default WeaponBlock;
