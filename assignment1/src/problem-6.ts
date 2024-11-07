{

    //function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates.
    
    interface Profile {
        name: string,
        age: number,
        email: string
    }

    type updateProfile = (profile: Profile, updates: Partial<Profile>) => Profile;

    const updateProfile: updateProfile =(profile, updates) => {
       
        return {...profile,...updates}
        
        
    }

    const myProfile: Profile = {
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com",
      };
      
      const updatedProfile = updateProfile(myProfile, { age: 26});
      
   
      
     
      

}