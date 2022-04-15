import {useForm} from 'react-hook-form';

function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

function registerUser(data) {
    alert(JSON.stringify(data, undefined, 2));
}

    return (
        <div className="flex min-h-screen">
            <div className="flex-1 flex items-center justify-center">
                <div className="w-[50%]">
                    <p className="mb-2 text-4xl font-semibold">Welcome to Student's Cafe</p>
                    <p className="mb-6 text-gray-500">Sign up with your email.</p>

                    <form
                        className='flex flex-col gap-y-2'
                        onSubmit={handleSubmit(registerUser)}
                    >
                    <p className="font-semibold text-sm">Email</p>
                    <input
                        className="border py-1 px-2 rounded-lg"
                        placeholder="Please enter your email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                        },
                        })}
                    />
                        <p className="text-rose-500">{errors.email?.message}</p>

                        <p className="font-semibold text-sm">Password</p>
                        <input
                            className="border py-1 px-2 rounded-lg"
                            placeholder="Please enter your password"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                            })}
                        />
                        <p className="text-rose-500">{errors.password?.message}</p>

                        <p className='font-semibold text-sm'>Verify Password</p>
                        <input
                            className="border py-1 px-2 rounded-lg"
                            placeholder="Please repeat your password"
                            type="password"
                            {...register('verifyPassword', {
                                required: 'Verify Password is required',
                                validate: (value) =>
                                    value === watch('password') ? true : 'Not match',
                            })}
                        />
                        <p className='text-rose-500'>{errors.verifyPassword?.message}</p>
                        
                        <button className="bg-black hover:shadow-x1 transition duration-300 text-white py-2 rounded-lg">
                            Sign Up
                        </button>
                    </form>                  
                </div>
            </div>

        <div
        className="flex-1 bg-slate-50 relative"
        style={{
            background: 'url(photo-1497515114629-f71d768fd07c.jpg)',
            backgroundSize: 'cover',
        }}
    >
        <div className="absolute left-10 right-10 bottom-10 backdrop-blur-x1 p-10 text-white">
            <p className="mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.
            </p>
            <p className="text-x1 text-right font-semibold">jstuvvy</p>
            </div>
        </div>
    </div>
    );
}

export default SignUp;