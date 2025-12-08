
export type TAdminSetting = {
    pathName: string;
    route: string;
}

const adminSettings: TAdminSetting[] = [
    {
        pathName: "Personal Information",
        route: "/settings/personal-information"
    },
    {
        pathName: "Change Password",
        route: "/settings/change-password"
    },
    {
        pathName: "Privacy & Policy",
        route: "/settings/privacy-policy"
    },
]

export default adminSettings;