import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function Home() {
  return (
    <>
      <PageHeader title="Editar Contato" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
