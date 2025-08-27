import React from "react";
import { HiUser } from "react-icons/hi";
import css from "./UserMenu.module.css";

interface UserMenuProps {
    name: string;
    icon?: React.ComponentType<{ className?: string; size?: number }>;
}

export default function UserMenu({ name, icon: Icon = HiUser }: UserMenuProps) {
    return (
        <div>
            <Icon className={css.icon} size={24} /> {name}
        </div>
    );
}
