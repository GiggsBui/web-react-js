import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import SiteLayout from '../components/SiteLayout';
import BlankLayout from '../layouts/blank';
import { incrementCounter } from '../store/actions/counterActions';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyState, Layout, Page } from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
interface Props {
  user: {
    name: string
    email: string
    phone: string
    address: string
  }
}

const IndexPage: NextPage<Props> = ({ user }: any) => {
  const router = useRouter()
  const counter = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <Page>
      <Layout>
        <BlankLayout>
          <SiteLayout>
            <EmptyState
              heading="Discount your products temporarily"
              action={{
                content: 'Select products',
                onAction: () => console.log('clicked'),
              }}
              image={img}
            >
              <p>Select products to change their price temporarily.</p>
            </EmptyState>
            <main>
              <h1>Wellcome {user.name} join to Your Flower App</h1>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Address: {user.address}</p>
              <p>counter: {counter}</p>
              <button
                onClick={() => {
                  dispatch(incrementCounter())
                }}
              >
                Click me
              </button>
              <button onClick={() => router.push('/login')}>Login</button>
            </main>
            cdsza
          </SiteLayout>
        </BlankLayout>
      </Layout>
    </Page>
  )
}

export default IndexPage

/*
 * More information about getServerSideProps:
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      user: {
        name: 'Giggs',
        email: 'giggs@namtech.sg',
        phone: '84973637103',
        address: '165/16c Văn Thân, P8, Q6, TPHCM',
      },
    },
  }
}
