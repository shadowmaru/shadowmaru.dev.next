import type { Metadata } from 'next'
import utilStyles from "../../styles/utils.module.css";
import Publication from "../../components/publication";

const name = "Ricardo S. Yasuda";

export const metadata: Metadata = {
  title: `${name} - Publications`,
}

export default function Publications() {
  return (
    <section>
      <h2 className={utilStyles.headingLg}>Publications</h2>

      <Publication
        title="InfoQ BR"
        url="https://www.infoq.com/br/profile/Ricardo-Yasuda/"
        type="Translation, Original articles"
        date="2008-2009"
      >
        Translation of articles from English to Brazilian Portuguese, and
        original articles about technology and events in pt-BR.
      </Publication>

      <Publication
        title="O (comovente) guia de Ruby do Why"
        url="http://why.carlosbrando.com"
        type="Translation"
        date="2009"
      >
        Translation to Brazilian Portuguese of &ldquo;Why&apos;s (poignant)
        guide to Ruby&rdquo;, by Why the lucky stiff. Made in collaboration
        with several Brazilian developers.
      </Publication>

      <Publication
        title="Aprenda a Programar"
        url="https://www.jmonteiro.com/aprendaaprogramar/"
        type="Translation"
        date="2008"
      >
        Translation to Brazilian Portuguese of &ldquo;Learn to Program&rdquo;,
        by Chris Pine, a book that teaches programming using Ruby as a
        language. Made in collaboration with several Brazilian developers from
        the rails-br community.
      </Publication>
    </section>
  );
}
