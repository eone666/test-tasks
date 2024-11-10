import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select.tsx";
import { useMask } from "@react-input/mask";
import { NumberInput } from "@/components/ui/NumberInput.tsx";
import { cities } from "@/consts/cities.ts";
import { additionalInfo } from "@/consts/additionalInfo.ts";
import { Calendar } from "@/components/ui/Calendar.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup.tsx";
import { Checkbox } from "@/components/ui/Checkbox.tsx";
import { useAppDispatch } from "@/redux/store";
import { postNewRequest } from "@/redux/store/requestsSlice";
import { formSchema } from "@/types/newRequest.ts";

export function NewRequest() {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      sum: "",
      type: "classic",
      viewersCount: "",
      phone: "",
      city: undefined,
      date: new Date(),
      callMe: "yes",
      receiveAdditionalInfo: [],
    },
  });

  const numberInputRef = useMask({
    mask: "+7 (___)  ___ - __ - __",
    replacement: { _: /\d/ },
  });

  function handleSubmit() {
    dispatch(postNewRequest(form));
  }

  function handleReset() {
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="mb-[40px] flex flex-col gap-[40px] 2xl:flex-row 2xl:gap-[70px]">
          <div className="flex flex-1 flex-col gap-[40px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название заявки*</FormLabel>
                  <FormControl>
                    <Input placeholder="Напишите название заявки" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-[40px] md:flex-row 2xl:gap-[70px]">
              <FormField
                control={form.control}
                name="sum"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Сумма заявки</FormLabel>
                    <FormControl>
                      <div className="flex flex-1 items-center gap-[4px]">
                        <Input placeholder="Сумма" {...field} />
                        <span>₸</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Тип заявки*</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="classic">Классический</SelectItem>
                          <SelectItem value="non-classic">
                            Не классический?
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="callMe"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Позвонить для подтверждения</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-[20px]"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Да</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">Нет</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="receiveAdditionalInfo"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Получать дополнительную информацию</FormLabel>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    {Object.entries(additionalInfo).map(([key, value]) => (
                      <FormField
                        key={key}
                        control={form.control}
                        name="receiveAdditionalInfo"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={key}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(key)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, key])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== key,
                                          ),
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {value}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-1 flex-col gap-[40px] md:flex-row 2xl:gap-[70px]">
            <div className="flex flex-1 flex-col gap-[40px]">
              <FormField
                control={form.control}
                name="viewersCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Количество зрителей</FormLabel>
                    <FormControl>
                      <NumberInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Город</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Выберите Ваш город" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(cities).map(([value, label]) => (
                            <SelectItem key={value} value={value}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-1 flex-col gap-[40px]">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Номер телефона*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        ref={numberInputRef}
                        placeholder="+7 (___)  ___ - __ - __"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Дата заявки</FormLabel>
                    <FormControl>
                      <Calendar
                        selected={field.value}
                        onDayClick={field.onChange}
                        showOutsideDays={false}
                        disabled={{ before: new Date() }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="mb-[40px]">* - обязательные поля</div>
        <div className="flex gap-[20px] md:gap-[80px]">
          <Button className="md:w-[200px]" type="submit">
            Отправить
          </Button>

          <Button
            variant="secondary"
            disabled={!form.formState.isDirty}
            className="md:w-[200px]"
            type="submit"
            onClick={handleReset}
          >
            Очистить
          </Button>
        </div>
      </form>
    </Form>
  );
}
