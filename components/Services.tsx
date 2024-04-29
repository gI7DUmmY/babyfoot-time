import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Services = () => {
  return (
    <section className='w-full flex flex-col justify-center gap-2 p-1 md:grid md:grid-cols-2'>
      <Card>
        <CardHeader>
          <CardTitle>pour votre entreprise</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>fédérer</li>
            <li>créer du lien</li>
            <li>communiquer</li>
            <li>challenger</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>pour vos soirées privées</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>s'amuser</li>
            <li>favoriser les échanges</li>
            <li>se défouler</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='col-span-2'>
        <CardHeader>
          <CardTitle>louez</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            une ou plusieurs tables bonzini b90 itsf <br /> (table officielle en
            compétition)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>personnalisez</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>votre tournoi</li>
            <li>des défis</li>
            <li>des stages</li>
            <li>du freeplay</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>nous gérons</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>transport</li>
            <li>montage</li>
            <li>réglages</li>
            <li>démontage</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

export default Services
