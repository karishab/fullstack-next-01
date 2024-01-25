import { SignUp } from '@clerk/nextjs'
import { RedirectUrl } from '@clerk/nextjs/server';
import { redirect } from 'next/dist/server/api-utils';

const SignUpPage = () => {
    return <SignUp  afterSignUpUrl="/new-user" redirectUrl="/new-user"/>
}

export default SignUpPage;
