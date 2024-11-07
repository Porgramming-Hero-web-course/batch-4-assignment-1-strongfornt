"use strict";
{
    const updateProfile = (profile, updates) => {
        return Object.assign(Object.assign({}, profile), updates);
    };
    const myProfile = {
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com",
    };
    const updatedProfile = updateProfile(myProfile, { age: 26 });
}
