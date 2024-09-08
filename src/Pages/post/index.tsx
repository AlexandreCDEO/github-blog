import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GitHubIssue } from '../../contexts/postsContext'
import { api } from '../../lib/axios'
import { PostContent } from './postContent'
import { PostInfo } from './postInfo'

export function Post() {
  const { issueNumber } = useParams()

  const [post, setPost] = useState<GitHubIssue | null>(null)

  const loadPostData = useCallback(async () => {
    const response = await api.get(
      `/repos/alexandrecdeo/github-blog/issues/${issueNumber}`,
    )
    setPost(response.data)
  }, [issueNumber])

  useEffect(() => {
    loadPostData()
  }, [loadPostData])

  return (
    <>
      {post ? (
        <>
          <PostInfo
            title={post.title}
            username={post.user.login}
            createdDate={post.created_at}
            numberOfComments={post.comments}
          />
          <PostContent content={post.body} />
        </>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  )
}
