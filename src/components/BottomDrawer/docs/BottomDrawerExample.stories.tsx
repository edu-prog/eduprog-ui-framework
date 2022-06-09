import Button from "@components/Button";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import BottomDrawer from "../BottomDrawer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/BottomDrawer/Example",
  component: BottomDrawer,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BottomDrawer>;

const Template: ComponentStory<typeof BottomDrawer> = ({
  onClose,
  open: propsOpen,
  backdropClassname,
  className,
  duration,
  hideScrollbars,
  mountOnEnter,
  unmountOnExit,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(propsOpen);
  }, [propsOpen]);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Bottom Drawer</Button>

      <BottomDrawer
        duration={duration}
        hideScrollbars={hideScrollbars}
        open={open}
        onClose={() => {
          setOpen(false);

          onClose && onClose();
        }}
        backdropClassname={backdropClassname}
        className={className}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea impedit
        tenetur blanditiis dolorem temporibus est quasi laborum facere labore,
        iusto eaque eius alias vero voluptatum aliquid aspernatur voluptatibus
        dignissimos adipisci expedita, recusandae quisquam. Odit distinctio
        voluptatum pariatur quia, tempore tenetur. Qui modi animi atque eligendi
        voluptate autem distinctio repellendus voluptas soluta provident
        similique est reiciendis assumenda error molestias molestiae, recusandae
        amet doloribus, dicta ducimus. Debitis nobis amet nulla, eaque totam
        esse deserunt consequuntur quasi eos facere aut doloremque corrupti, et
        dolorem recusandae accusamus soluta est sint ut, magnam voluptate odit.
        Omnis nihil vero perferendis iste aliquam vel ipsum quas autem numquam
        ab consequuntur molestias ipsam in perspiciatis sapiente maiores iusto
        ipsa culpa, eius non libero exercitationem consectetur minima.
        Necessitatibus in consectetur maiores a iure magni veniam placeat cumque
        pariatur. Enim impedit alias soluta nam exercitationem doloremque quod
        quia esse nihil! Dicta sint tempore unde cupiditate qui inventore libero
        quasi rerum, in rem accusamus magnam quam eligendi, numquam ipsa minima
        eum, soluta natus consectetur! Perspiciatis provident quaerat adipisci
        recusandae in cum sapiente assumenda dolores dignissimos facere repellat
        illo officiis, soluta vero, cupiditate architecto illum ea possimus
        quae. Deleniti dignissimos, atque in exercitationem, labore a eligendi
        nulla ea, esse totam incidunt beatae! Qui, totam id. Molestiae
        accusantium veniam enim quia explicabo repudiandae commodi ipsum,
        facilis sint, corporis tenetur tempore? Repellendus iste qui id amet
        distinctio, voluptatibus sed quod voluptates ab, facilis expedita unde
        quos, earum quo similique? Aspernatur optio sunt commodi error, quaerat
        itaque aut veritatis perferendis blanditiis tenetur at deleniti.
        Quibusdam rem omnis nesciunt qui excepturi quam tempora repellat? Fugit
        repudiandae quas debitis voluptatibus excepturi corrupti odio velit
        illum distinctio, adipisci architecto unde harum at vel et doloremque?
        Iusto possimus aliquid alias quaerat eaque porro, non fugit? Sunt culpa
        deserunt ipsam dolorum veritatis, incidunt nobis ullam voluptatum
        aliquid est ea corporis?
      </BottomDrawer>
    </>
  );
};

export const Playground = Template.bind({});
