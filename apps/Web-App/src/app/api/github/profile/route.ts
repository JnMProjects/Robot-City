import { graphql } from "@octokit/graphql";

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${process.env.NEXT_PUBLIC_GH_PFP_TOKEN}`,
    },
});

async function parseGitAvatar(username: string) {
    const query = `
        query ($username: String!) {
            user(login: $username) {
                avatarUrl
            }
        }
    `;

    const response = await graphqlWithAuth(query, { username }) as any;

    return response.user.avatarUrl;
}

export default async function GET(req: any, res: any) {
    const { username } = req.query;

    try {
        const avatarUrl = await parseGitAvatar(username);
        res.status(200).json({ avatarUrl });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}