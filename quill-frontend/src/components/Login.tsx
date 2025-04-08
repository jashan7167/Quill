import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/5">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome to <span className="text-blue-500">Quill</span>
          </h1>
          <p className="text-zinc-400">Sign in to access your notes</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
            />
            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              Sign in
            </Button>
          </div>

          <p className="text-center text-sm text-zinc-400 mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;