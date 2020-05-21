/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NextApiRequest, NextApiResponse } from 'next'
import { postsData } from '../../../utils/posts-data'

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(postsData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(postsData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
