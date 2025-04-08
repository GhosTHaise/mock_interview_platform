import { getCurrentUser } from '@/lib/actions/auth.action';
import { getFeedbackByInterviewId, getInterviewById } from '@/lib/actions/general.action';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

const FeedbackPage = async ({params}: RouteParams) => {
    const { id } = await params;
    const user = await getCurrentUser();

    const interview = await getInterviewById(id as string);
    if(!interview) redirect("/");

    const feedback = await getFeedbackByInterviewId({
        interviewId: id as string,
        userId: user?.id!
    });

    console.log(feedback)

    return (
        <div>

        </div>
    )
}

export default FeedbackPage
