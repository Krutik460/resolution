interface UserPageProps {
  params: {
    userName: string
  }
}

export default async function UserPage({ params }: UserPageProps) {
  const { userName } = params
  return {}
}
