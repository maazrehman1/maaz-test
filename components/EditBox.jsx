import react from "react";

function EditBox() {
    return(
    <div className="text-center mt-4 ">
    <form className="relative mt-2">
                  <label className="sr-only">Update Name</label>
                  <input className="form-input  focus:border-slate-300" type="search" placeholder="Edit Name" 
                //   onChange={(event) =>  (event.target.value) } 
                  />
                </form>

                <form className="relative mt-2 ">
                  <label className="sr-only">Update Email</label>
                  <input className="form-input  focus:border-slate-300" type="search" placeholder="Edit Email" 
                //   onChange={(event) =>  (event.target.value) } 
                  />
                </form>

                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-3" 
                // onClick={createUser}
                >
                  <span className="hidden xs:block ml-2">Edit Email</span>
                </button>
    </div>
    );
};

export default EditBox;
