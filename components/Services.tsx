import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Services = () => {
  return (
    <section className='w-full flex flex-col justify-center gap-2 p-1'>
      <Card>
        <CardHeader>
          <CardTitle>pour votre entreprise</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <ul>
              <li>fédérer</li>
              <li>créer du lien</li>
              <li>communiquer</li>
              <li>challenger</li>
            </ul>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>pour vos soirées privées</CardTitle>
        </CardHeader>
        <CardContent>
          <p>s'amuser, favoriser les échanges, se défouler</p>
        </CardContent>
      </Card>

      <Card>
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
          <p>
            <ul>
              <li>votre tournoi</li>
              <li>des défis</li>
              <li>des stages</li>
              <li>du freeplay</li>
            </ul>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>nous gérons</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <ul>
              <li>transport</li>
              <li>montage</li>
              <li>réglages</li>
              <li>démontage</li>
            </ul>
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

export default Services
