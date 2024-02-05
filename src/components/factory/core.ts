export declare namespace CORE {
  type Override<T = {}, U = {}> = U & Omit<T, keyof U>;

  type FactoryPayload = {
    props: Record<string, any>;
    component: any;
    components?: Record<string, any>;
    ref?: any;
  };

  type Factory<T extends FactoryPayload> = T;
}
